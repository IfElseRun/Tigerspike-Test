using System.Data;
using BusinessLogic.Helpers.Extensions.DataRow;

namespace BusinessLogic.Entities
{
    public class Note : IEntity<Note>
    {
        #region Attributes
        private string _username;
        private string _text;
        private Position _location;
        #endregion

        #region Properties

        public Position Location { get => _location; set => _location = value; }
        public string Text { get => _text; set => _text = value; }
        public string Username { get => _username; set => _username = value; }
        #endregion

        #region Methods
        public Note()
        {
            _username = string.Empty;
            _text = string.Empty;
            _location = new Position();
            _location.coords = new Position.Coordinates();
        }

        public Note Construct(DataRow row)
        {
            _username = row.GetValue<string>("username", string.Empty);
            _text = row.GetValue<string>("text", string.Empty);
            _location.coords.latitude = row.GetValue<decimal>("lat");
            _location.coords.longitude = row.GetValue<decimal>("lon");

            return this;
        }
        #endregion
    }
}
