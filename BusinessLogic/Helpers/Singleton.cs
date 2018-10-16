using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Helpers
{
    public abstract class Singleton<T>
        where T : class, new()
    {
        #region Attributes
        private static T _instance;
        #endregion

        #region Properties
        public static T Instance
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new T();
                }
                return _instance;
            }
        }
        #endregion
    }
}
