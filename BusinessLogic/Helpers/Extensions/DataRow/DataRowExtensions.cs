using System;

namespace BusinessLogic.Helpers.Extensions.DataRow
{
    public static class DataRowExtensions
    {
        #region Public Methods
        /// <summary>
        /// Get a value from a colum within a DataRow
        /// </summary>
        /// <typeparam name="T">Paramater type to get</typeparam>
        /// <param name="row"></param>
        /// <param name="columnName">Name of the desired column</param>
        /// <returns>The default column value</returns>
        public static T GetValue<T>(this System.Data.DataRow row, string columnName)
        {
            return GetValue<T>(row, columnName, default(T));
        }

        /// <summary>
        /// Get a value from a colum within a DataRow
        /// </summary>
        /// <typeparam name="T">Paramater type to get</typeparam>
        /// <param name="row"></param>
        /// <param name="columnName">Name of the desired column</param>
        /// <param name="defaultValue">Default value to return</param>
        /// <returns>The default column value</returns>
        public static T GetValue<T>(this System.Data.DataRow row, string columnName, T defaultValue)
        {
            T value = defaultValue;

            try
            {              
                if (row != null && row.Table.Columns.Contains(columnName))
                {
                    value = Parse<T>(row[columnName], defaultValue);
                }
            }
            catch (Exception e)
            {
                value = defaultValue;
            }

            return value;
        }
        /// <summary>
        /// Get a value from a colum within a DataRow
        /// </summary>
        /// <typeparam name="T">Paramater type to get</typeparam>
        /// <param name="row"></param>
        /// <param name="columnName">Name of the desired column</param>
        /// <returns>The default column value</returns>
        public static T GetValue<T>(this System.Data.DataRow row, int columnIndex)
        {
            return GetValue<T>(row, columnIndex, default(T));
        }

        /// <summary>
        /// Get a value from a colum within a DataRow
        /// </summary>
        /// <typeparam name="T">Paramater type to get</typeparam>
        /// <param name="row"></param>
        /// <param name="columnName">Name of the desired column</param>
        /// <param name="defaultValue">Default value to return</param>
        /// <returns>The default column value</returns>
        public static T GetValue<T>(this System.Data.DataRow row, int columnIndex, T defaultValue)
        {
            T value = defaultValue;

            try
            {
                if (row != null && row.Table.Columns.Count <= columnIndex + 1)
                {
                    value = Parse<T>(row[columnIndex], defaultValue);
                }
            }
            catch (Exception e)
            {
                value = defaultValue;
            }

            return value;
        }

        /// <summary>
        /// Get a value from a colum within a DataRow
        /// </summary>
        /// <param name="row"></param>
        /// <param name="columnName">Name of the desired column</param>
        /// <returns>The default column value</returns>
        public static string GetStringValue(this System.Data.DataRow row, int columnIndex)
        {
            return GetStringValue(row, columnIndex, default(string));
        }

        /// <summary>
        /// Get a value from a colum within a DataRow
        /// </summary>
        /// <param name="row"></param>
        /// <param name="columnName">Name of the desired column</param>
        /// <param name="defaultValue">Default value to return</param>
        /// <returns>The default column value</returns>
        public static string GetStringValue(this System.Data.DataRow row, int columnIndex, string defaultValue)
        {
            string value = defaultValue;

            try
            {
                if (row != null && row.Table.Columns.Count >= columnIndex + 1)
                {
                    value = row[columnIndex].ToString();
                }
            }
            catch (Exception e)
            {
                value = defaultValue;
            }

            return value;
        }

        /// <summary>
        /// Get a value from a colum within a DataRow
        /// </summary>
        /// <param name="row"></param>
        /// <param name="columnName">Name of the desired column</param>
        /// <returns>The default column value</returns>
        public static string GetStringValue(this System.Data.DataRow row, string columnName)
        {
            return GetStringValue(row, columnName, default(string));
        }

        /// <summary>
        /// Get a value from a colum within a DataRow
        /// </summary>
        /// <param name="row"></param>
        /// <param name="columnName">Name of the desired column</param>
        /// <param name="defaultValue">Default value to return</param>
        /// <returns>The default column value</returns>
        public static string GetStringValue(this System.Data.DataRow row, string columnName, string defaultValue)
        {
            string value = defaultValue;

            try
            {
                if (row != null && row.Table.Columns.Contains(columnName))
                {
                    value = row[columnName].ToString();
                }
            }
            catch (Exception e)
            {
                value = defaultValue;
            }

            return value;
        }

        private static T Parse<T>(object value, T defaultValue)
        {
            T returnValue = defaultValue;

            switch (typeof(T).ToString())
            {
                case "System.Int16":
                case "System.Int32":
                case "System.Int64":
                case "System.Boolean":
                case "System.Decimal":
                    returnValue = Parser<T>.Parse(value.ToString());
                    break;
                default:
                    returnValue = (T)Convert.ChangeType(value, typeof(T));
                    break;
            }

            return returnValue;
        }
        #endregion
    }
}
