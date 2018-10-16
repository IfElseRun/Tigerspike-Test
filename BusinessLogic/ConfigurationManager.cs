using BusinessLogic.Helpers;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic
{
    public class ConfigurationManager : Singleton<ConfigurationManager>
    {

        #region Attributes
        private string _connectionString;
        #endregion

        #region Properties
        public string ConnectionString { get => _connectionString; set => _connectionString = value; }
        #endregion
    }
}
