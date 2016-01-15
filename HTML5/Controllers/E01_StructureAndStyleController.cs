using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HTML5.Controllers
{
    public class E01_StructureAndStyleController : Controller
    {
        // GET: E01_StructureAndStyle
        public ActionResult Index()
        {
            var sel = new Models.E01_StructureAndStyle.StyleSelector() { Style = Models.E01_StructureAndStyle.StyleSelector.Styles.none };
            return View(sel);
        }

        public ActionResult SemanticMarkup()
        {
            return View();
        }

        public ActionResult OutlineClassic()
        {
            return View();
        }

        public ActionResult OutlineHTML5()
        {
            return View();
        }


        public ActionResult CSSIntro()
        {
            return View();
        }

        const string Sol = "Solarsys";

        public ActionResult SetNone()
        {
            var sel = new Models.E01_StructureAndStyle.StyleSelector() { Style = Models.E01_StructureAndStyle.StyleSelector.Styles.none };
            return View(Sol, sel);
        }

        public ActionResult SetSimple()
        {
            var sel = new Models.E01_StructureAndStyle.StyleSelector() { Style = Models.E01_StructureAndStyle.StyleSelector.Styles.simple };
            return View(Sol, sel);
        }

        public ActionResult SetResponsive()
        {
            var sel = new Models.E01_StructureAndStyle.StyleSelector() { Style = Models.E01_StructureAndStyle.StyleSelector.Styles.responsive };
            return View(Sol, sel);
        }

        public ActionResult U01SemTags_article_co()
        {
            return View();
        }

        public ActionResult U02CSSSelektoren()
        {
            return View();
        }

        public ActionResult U03BoxModell()
        {
            return View();
        }


    }
}