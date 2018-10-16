using Microsoft.AspNetCore.Mvc;
using blControllers = BusinessLogic.Controllers;
using BusinessLogic.Entities;
using System.Collections.Generic;

namespace WebServices.Controllers
{
    public class NoteController : Controller
    {
        [HttpGet]
        public IEnumerable<Note> Get()
        {
            return blControllers.NoteController.Instance.GetAll();
        }

        [HttpGet]
        public IEnumerable<Note> Username(string username)
        {
            return blControllers.NoteController.Instance.GetByUsername(username);
        }

        [HttpGet]
        public IEnumerable<Note> Search(string searchText)
        {
            return blControllers.NoteController.Instance.GetByUsername(searchText);
        }

        [HttpPost]
        public Note Post(Note note)
        {
            return blControllers.NoteController.Instance.Insert(note);
        }
    }
}
