using BusinessLogic.Entities;
using BusinessLogic.Helpers;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;

namespace BusinessLogic.Controllers.Base
{
    public abstract class BaseController<C, E> : Singleton<C>
        where C : BaseController<C, E>, new()
        where E : IEntity<E>, new()
    {
        #region Attributes
        private string _connectionString;
        #endregion

        #region Properties
        #endregion

        #region Methods
        public BaseController()
        {
            _connectionString = ConfigurationManager.Instance.ConnectionString;
        }

        /// <summary>
        /// Construct multiple instances of the entity
        /// </summary>
        /// <param name="table"></param>
        /// <returns></returns>
        protected IEnumerable<E> GetMultiple(DataTable table)
        {
            return (from DataRow row in table.Rows select (new E().Construct(row)));
        }

        /// <summary>
        /// Construct one instance of the entity
        /// </summary>
        /// <param name="row"></param>
        /// <returns></returns>
        protected E GetSingle(DataRow row)
        {
            return new E().Construct(row);
        }

        /// <summary>
        /// Execute a stored procedure
        /// </summary>
        /// <param name="commandToExecute">Name of the stored procedure to execute</param>
        /// <returns>Valid datatable if connection is successfull, otherwise null</returns>
        protected DataTable ExecuteStoredProcedureTable(MySqlCommand commandToExecute)
        {
            DataTable tableToReturn = new DataTable();
            using (BaseDatabaseManager connection = new BaseDatabaseManager(_connectionString))
            {
                connection.DatabaseConnection.Open();
                commandToExecute.Connection = connection.DatabaseConnection;
                commandToExecute.CommandTimeout = int.MaxValue;
                MySqlDataAdapter dataAdapter = new MySqlDataAdapter(commandToExecute);
                dataAdapter.Fill(tableToReturn);
            }

            return tableToReturn;
        }

        /// <summary>
        /// Execute a stored procedure
        /// </summary>
        /// <param name="commandToExecute">Name of the stored procedure to execute</param>
        /// <returns>First datarow if connection is successfull, otherwise null</returns>
        protected DataRow ExecuteStoredProcedureRow(MySqlCommand commandToExecute)
        {
            DataTable table = new DataTable();
            DataRow rowToReturn = null;

            using (BaseDatabaseManager connection = new BaseDatabaseManager(_connectionString))
            {
                connection.DatabaseConnection.Open();
                commandToExecute.Connection = connection.DatabaseConnection;
                commandToExecute.CommandTimeout = int.MaxValue;
                MySqlDataAdapter dataAdapter = new MySqlDataAdapter(commandToExecute);
                dataAdapter.Fill(table);
                if (!table.Rows.Count.Equals(0))
                {
                    rowToReturn = table.Rows[0];
                }
            }

            return rowToReturn;
        }
        /// <summary>
        /// Execute a stored procedure
        /// </summary>
        /// <param name="commandToExecute">Name of the stored procedure to execute</param>
        /// <param name="connectionString">Connection string to initialize the call</param>
        /// <returns>True value if successfull</returns>
        protected bool ExecuteStoredProcedure(MySqlCommand commandToExecute, int retryCount = 0)
        {
            bool success = false;
            using (BaseDatabaseManager connection = new BaseDatabaseManager(_connectionString))
            {
                try
                {
                    connection.DatabaseConnection.Open();
                    commandToExecute.Connection = connection.DatabaseConnection;
                    commandToExecute.CommandTimeout = int.MaxValue;
                    int rows = commandToExecute.ExecuteNonQuery();
                    success = true;
                }
                catch (Exception error)
                {
                    if (retryCount.Equals(0))
                    {
                        string command = string.Empty;
                        if (commandToExecute != null)
                        {
                            command = commandToExecute.CommandText;
                        }
                        string errorMessage = string.Format("An error has occured while executing a mysql query, the error is: {0} and the query is {1}", error.Message, command);
                        Console.WriteLine(errorMessage);
                    }
                    else
                    {
                        connection.DatabaseConnection.Dispose();
                        success = ExecuteStoredProcedure(commandToExecute, retryCount - 1);
                    }
                }
            }

            return success;
        }
        /// <summary>
        /// Generate a SqlCommand object
        /// </summary>
        /// <param name="commandText">Command Name</param>
        /// <param name="commandType">Command Type</param>
        /// <param name="paramaters">Paramaters</param>
        /// <returns></returns>
        protected MySqlCommand GenerateSqlCommand(string commandText, CommandType commandType, params MySqlParameter[] paramaters)
        {
            MySqlCommand command = new MySqlCommand(commandText);
            command.CommandType = commandType;
            if (paramaters != null)
            {
                command.Parameters.AddRange(paramaters);
            }

            return command;
        }
        /// <summary>
        /// Generate a stored procedure
        /// </summary>
        /// <param name="commandText">Command Name</param>
        /// <param name="paramaters">Paramaters</param>
        /// <returns></returns>
        protected virtual MySqlCommand GenerateStoredProcedure(string commandText, params MySqlParameter[] paramaters)
        {
            return GenerateSqlCommand(commandText, CommandType.StoredProcedure, paramaters);
        }
        #endregion
    }
}
