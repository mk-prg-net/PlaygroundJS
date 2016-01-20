using System.Web;
using System.Web.Optimization;

namespace HTML5
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));


            //mko------------------------
            bundles.Add(new ScriptBundle("~/bundles/HTML5/SemanticMarkup").IncludeDirectory("~/Scripts/HTML5/SemanticMarkup", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/HTML5/CSSIntro").IncludeDirectory("~/Scripts/HTML5/CSSIntro", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/HTML5/Solarsys").IncludeDirectory("~/Scripts/HTML5/Solarsys", "*.js"));



            bundles.Add(new ScriptBundle("~/bundles/JavaScriptLernen/Basics_01").IncludeDirectory("~/Scripts/JavaScriptLernen/Basics/01_debug", "*.js").Include("~/Scripts/JavaScriptLernen/Basics/Helper.js"));
            bundles.Add(new ScriptBundle("~/bundles/JavaScriptLernen/Basics_02").IncludeDirectory("~/Scripts/JavaScriptLernen/Basics/02_literals_blocks", "*.js").Include("~/Scripts/JavaScriptLernen/Basics/Helper.js"));
            bundles.Add(new ScriptBundle("~/bundles/JavaScriptLernen/Basics_03").IncludeDirectory("~/Scripts/JavaScriptLernen/Basics/03_datatypes", "*.js").Include("~/Scripts/JavaScriptLernen/Basics/Helper.js"));
            bundles.Add(new ScriptBundle("~/bundles/JavaScriptLernen/Basics_04").IncludeDirectory("~/Scripts/JavaScriptLernen/Basics/04_ControlBlocks", "*.js").Include("~/Scripts/JavaScriptLernen/Basics/Helper.js"));
            bundles.Add(new ScriptBundle("~/bundles/JavaScriptLernen/Basics_05").IncludeDirectory("~/Scripts/JavaScriptLernen/Basics/05_Functions", "*.js").Include("~/Scripts/JavaScriptLernen/Basics/Helper.js"));
            bundles.Add(new ScriptBundle("~/bundles/JavaScriptLernen/Basics_06")
                .IncludeDirectory("~/Scripts/JavaScriptLernen/Basics/06_OO", "*.js")
                .Include("~/Scripts/JavaScriptLernen/Basics/Helper.js")
                .Include("~/Scripts/JavaScriptLernen/Namespace/GetNamespace.js"));
            bundles.Add(new ScriptBundle("~/bundles/JavaScriptLernen/B07_Async").IncludeDirectory("~/Scripts/JavaScriptLernen/Basics/07_Asynchron", "*.js"));

            // Bundle für Globalize: Reihenfolge der Scripts ist wichtig !
            bundles.Add(new ScriptBundle("~/bundles/JavaScriptLernen/Basics_08").IncludeDirectory("~/Scripts/JavaScriptLernen/Basics/08_Globalize", "*.js")
                   .IncludeDirectory("~/Scripts/cldr/dist", "*.js")
                   .IncludeDirectory("~/Scripts/cldr/dist/cldr", "*.js")

                   .IncludeDirectory("~/Scripts/globalize/dist", "*.js")

                   .Include("~/Scripts/globalize/dist/globalize/message.js")
                   .Include("~/Scripts/globalize/dist/globalize/number.js")
                   .Include("~/Scripts/globalize/dist/globalize/plural.js")

                   .Include("~/Scripts/globalize/dist/globalize/currency.js")
                   .Include("~/Scripts/globalize/dist/globalize/date.js")

                   .Include("~/Scripts/globalize/dist/globalize/relative-time.js")
                   );



            bundles.Add(new ScriptBundle("~/bundles/JavaScriptLernen/Dom").IncludeDirectory("~/Scripts/JavaScriptLernen/DOM", "Lisp.UI.js"));
            bundles.Add(new ScriptBundle("~/bundles/JavaScriptLernen/DomRus").IncludeDirectory("~/Scripts/JavaScriptLernen/DOM", "russia.js"));
            bundles.Add(new ScriptBundle("~/bundles/JavaScriptLernen/DomJQSel").IncludeDirectory("~/Scripts/JavaScriptLernen/DOM", "DomSelectorsDemo.js"));

            bundles.Add(new ScriptBundle("~/bundles/JavaScriptLernen/FormsIO").IncludeDirectory("~/Scripts/JavaScriptLernen/FormsIO", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/qunit").Include("~/Scripts/qunit.js"));

            bundles.Add(new ScriptBundle("~/bundles/JavaScriptLernen/QUnit").IncludeDirectory("~/Scripts/JavaScriptLernen/QUnit", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/JavaScriptLernen/Algo").Include(
                "~/Scripts/JavaScriptLernen/Algo/GetNamespaceMkoAlgo.js",
                "~/Scripts/JavaScriptLernen/Algo/CancellationToken.js",
                "~/Scripts/JavaScriptLernen/Algo/PrimeScan3.js",
                "~/Scripts/JavaScriptLernen/Algo/PredSuccRatio.js",
                "~/Scripts/JavaScriptLernen/Algo/RomToArab.js"
                ));


            bundles.Add(new ScriptBundle("~/bundles/JavaScriptLernen/Newton").Include(
                "~/Scripts/JavaScriptLernen/Namespace/GetNamespace.js",
                "~/Scripts/JavaScriptLernen/Newton/GetNamespaceMkoNewton.js",
                "~/Scripts/JavaScriptLernen/Newton/OrderOfMagnitudes.js",
                "~/Scripts/JavaScriptLernen/Newton/Measurement.js",
                "~/Scripts/JavaScriptLernen/Newton/Length.js",
                "~/Scripts/JavaScriptLernen/Newton/Length.Meter.js",
                "~/Scripts/JavaScriptLernen/Newton/Length.Centimeter.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/JavaScriptLernen/Lisp").Include(
                "~/Scripts/JavaScriptLernen/Lisp/GetNamespaceMkoLisp.js",
                "~/Scripts/JavaScriptLernen/Lisp/Lisp.js"
                ));




            bundles.Add(new ScriptBundle("~/bundles/JavaScriptLernen/Graph").Include(
                "~/Scripts/JavaScriptLernen/CanvasPainter/GetNamespaceMkoGraph.js",
                "~/Scripts/JavaScriptLernen/CanvasPainter/CanvasDefs.js",
                "~/Scripts/JavaScriptLernen/CanvasPainter/CanvasScript.js",
                "~/Scripts/JavaScriptLernen/CanvasPainter/CanvasMouseTools.js",
                "~/Scripts/JavaScriptLernen/CanvasPainter/CanvasIntro.js",
                 "~/Scripts/JavaScriptLernen/CanvasPainter/DocumentReady.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/JavaScriptLernen/AjaxIntro").IncludeDirectory("~/Scripts/JavaScriptLernen/Ajax", "*.js").Include("~/Scripts/JavaScriptLernen/Basics/Helper.js"));


            bundles.Add(new ScriptBundle("~/bundles/AngularJS").Include("~/Scripts/angular1-5/angular.js", "~/Scripts/i18n/angular-locale_de-de.js"));

            bundles.Add(new ScriptBundle("~/bundles/WebWorker").IncludeDirectory("~/Scripts/JavaScriptLernen/WebWorker", "*.js"));

        }
    }
}
