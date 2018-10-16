using BusinessLogic.Entities;
using System.Collections.Generic;
using MySql.Data.MySqlClient;

namespace BusinessLogic.Controllers
{
    public class NoteController : Base.BaseController<NoteController, Note>
    {
        public IEnumerable<Note> GetBySearch(string searchText)
        {
            return GetMultiple(ExecuteStoredProcedureTable(GenerateStoredProcedure("Notes_Search",
                new MySqlParameter() { ParameterName = "_searchText", DbType = System.Data.DbType.String, Value = searchText }
            )));
        }

        public IEnumerable<Note> GetByUsername(string username)
        {
            return GetMultiple(ExecuteStoredProcedureTable(GenerateStoredProcedure("Notes_GetByUsername",
                new MySqlParameter() { ParameterName = "_username", DbType = System.Data.DbType.String, Value = username }
            )));
        }

        public IEnumerable<Note> GetAll()
        {
            return GetMultiple(ExecuteStoredProcedureTable(GenerateStoredProcedure("Notes_GetAll")));
        }

        public Note Insert(Note note)
        {
            if(ExecuteStoredProcedure(GenerateStoredProcedure("Notes_Insert",
                new MySqlParameter() { ParameterName = "_username", DbType = System.Data.DbType.String, Value = note.Username },
                new MySqlParameter() { ParameterName = "_text", DbType = System.Data.DbType.String, Value = note.Text },
                new MySqlParameter() { ParameterName = "_lat", DbType = System.Data.DbType.Decimal, Value = note.Location.coords.latitude },
                new MySqlParameter() { ParameterName = "_lon", DbType = System.Data.DbType.Decimal, Value = note.Location.coords.longitude }
            )))
            {
                return note;
            }
            return null;
        }
    }
}
