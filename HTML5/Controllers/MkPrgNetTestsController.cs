using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HTML5.Controllers
{
    public class MkPrgNetTestsController : Controller
    {
        // GET: MkPrgNetTests
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Ruft die Übersichten zu JavaScript- Themen auf
        /// </summary>
        /// <param name="viewName"></param>
        /// <returns></returns>
        public ActionResult ShowView(string viewName)
        {
            return View(viewName);
        }


    }
}