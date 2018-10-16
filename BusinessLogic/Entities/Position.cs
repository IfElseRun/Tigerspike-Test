using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Entities
{
    public class Position
    {
        #region Classes
        public class Coordinates {
            public decimal accuracy;
            public decimal? altitude;
            public decimal? altitudeAccuracy;
            public decimal? heading;
            public decimal latitude;
            public decimal longitude;
            public decimal? speed;
        }
        #endregion

        #region Attributes
        private decimal _timestamp;
        private Coordinates _coords;
        #endregion

        #region Properties
        public Coordinates coords { get => _coords; set => _coords = value; }
        public decimal timestamp { get => _timestamp; set => _timestamp = value; }
        #endregion
    }
}
