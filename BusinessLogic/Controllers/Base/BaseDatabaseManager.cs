using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Controllers.Base
{
    internal class BaseDatabaseManager : IDisposable
    {
        #region Attributes
        private MySqlConnection _databaseConnection;
        private string _connectionString;
        #endregion

        #region Properties
        /// <summary>
        /// The MySQL database connection object
        /// </summary>
        public MySqlConnection DatabaseConnection
        {
            get { return _databaseConnection; }
            set { _databaseConnection = value; }
        }
        #endregion

        #region Methods
        public BaseDatabaseManager(string connectionString)
        {
            _databaseConnection = new MySqlConnection(connectionString);
        }
        /// <summary>
        /// We dispose of the object and close the database connection if it is open.
        /// </summary>
        public void Dispose()
        {
            if (_databaseConnection != null)
            {
                if(_databaseConnection.State == System.Data.ConnectionState.Open)
                {
                    _databaseConnection.Close();
                }
                _databaseConnection.Dispose();
            }
        }
        #endregion
    }
}
