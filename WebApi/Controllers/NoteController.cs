using Microsoft.AspNetCore.Mvc;
using blControllers = BusinessLogic.Controllers;
using BusinessLogic.Entities;
using System.Collections.Generic;

namespace WebApi.Controllers
{
    [ApiController]
    public class NoteController : Controller
    {
        [HttpGet]
        [Route("note")]
        public IEnumerable<Note> Get()
        {

            return blControllers.NoteController.Instance.GetAll();
        }

        [HttpGet]
        [Route("note/username/{username}")]
        public IEnumerable<Note> Username(string username)
        {
            return blControllers.NoteController.Instance.GetByUsername(username);
        }

        [HttpGet]
        [Route("note/search/{searchText}")]
        public IEnumerable<Note> Search(string searchText)
        {
            return blControllers.NoteController.Instance.GetBySearch(searchText);
        }

        [HttpPost]
        [Route("note")]
        public Note Post(Note note)
        {
            return blControllers.NoteController.Instance.Insert(note);
        }
    }
}
