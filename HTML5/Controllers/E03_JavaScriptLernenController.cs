using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using System.Threading.Tasks;
using System.Net.Http;
using System.Net.Http.Headers;

namespace HTML5.Controllers
{
    public class E03_JavaScriptLernenController : Controller
    {

        /// <summary>
        /// Ruft die Übersichten zu JavaScript- Themen auf
        /// </summary>
        /// <param name="viewName"></param>
        /// <returns></returns>
        public ActionResult ShowView(string viewName)
        {
            return View(viewName);
        }


        public class ROP
        {
            public double A { get; set; }
            public double B { get; set; }
            public double Res { get; set; }
            public string OP { get; set; }
        }

        // Webdienst, der eine Historie liefert
        [HttpGet]
        public JsonResult GetHistory(string job)
        {
            var rnd = new System.Random(99);
            var history = new ROP[]{
                              new ROP(){ A = rnd.NextDouble() + 1, B= 13, Res= 25, OP = "+"},
                                new ROP(){ A = rnd.NextDouble() + 2, B= 13, Res= -1, OP = "-"},
                                  new ROP(){ A = rnd.NextDouble() + 2, B= 1, Res= rnd.Next(1, 100) , OP = "*"},
                          };

            var res = Newtonsoft.Json.JsonConvert.SerializeObject(history);

            return Json(res, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Add(string job)
        {
            var jobAsObj = Newtonsoft.Json.JsonConvert.DeserializeObject(job);

            var res = Newtonsoft.Json.JsonConvert.SerializeObject(new { data = 199 });

            return Json(res, JsonRequestBehavior.AllowGet);
        }


        /// <summary>
        /// Partielle View, die die aktuelle Uhrzeit zurückliefert
        /// </summary>
        /// <returns></returns>
        public ActionResult AjaxPartialView()
        {
            return View(DateTime.Now);
        }

        public ActionResult AjaxAutoCompleteProposalBox(string pre)
        {

            var proposalsAll = new string[]
                {
                "Aal", "Aare", "Anton", "Anaconda", "Audi", "Alt",
                "Baum", "Bart", "Beet", "Berta", "billig", "Booster",
                "Caesar", "Celle", "Chaos", "Chor", "Club", "Co", "Corona", "Colt",
                "Daneb", "Daneben", "Dann", "Dior",
                "Wald", "Wand", "Wahrheit", "Welt", "Welle", "Wert", "Wunsch", "Wunder",
                "Zar", "Zahn", "Zaun", "Zauber", "Zauberer", "Zelt", "Zebra", "Zigeuner",
                };

            pre = pre.Replace('_', ' ');

            var words = pre.Split(' ');
            var lastWord = words.LastOrDefault();

            int i = 0;
            Func<int> inc = () => ++i;

            var props = proposalsAll.Where(r => r.ToUpper().StartsWith(lastWord.ToUpper()))
                                    .OrderBy(r => r)
                                    .Select(r => new KeyValuePair<int, string>(inc(), r))
                                    .ToArray();

            // PArtialView anstatt View verhindert das laden der Layout- Page
            return PartialView(props);

        }

        /// <summary>
        /// Uhrzeit als JSON- String
        /// </summary>
        /// <param name="job"></param>
        /// <returns></returns>
        public JsonResult AjaxGetJsonTime(string job)
        {
            var now = DateTime.Now;
            var jsonTime = Newtonsoft.Json.JsonConvert.SerializeObject(new { TimeInfo = now.ToLongTimeString(), TimeRobo = now.ToString("s") });

            return Json(jsonTime, JsonRequestBehavior.AllowGet);
        }

        class CalcTask
        {
            public double A { get; set; }
            public double B { get; set; }
            public string Op { get; set; }
        }

        public JsonResult AjaxBidirektional(string task)
        {
            var taskObj = Newtonsoft.Json.JsonConvert.DeserializeObject<CalcTask>(task);

            double result = 0.0;
            if (taskObj.Op == "ADD")
            {
                result = taskObj.A + taskObj.B;
            }
            else
            {
                result = taskObj.A - taskObj.B;
            }

            var jsonResult = Newtonsoft.Json.JsonConvert.SerializeObject(new { Result = result });

            return Json(jsonResult, JsonRequestBehavior.AllowGet);
        }



        // GET: E03_JavaScriptLernen
        public ActionResult Index()
        {
            return View();
        }


        class QueryExchangeRateFromTo
        {
            public string From { get; set; }
            public string To { get; set; }
        }

        public JsonResult JsGetExchangeRate(string JsonFromTo)
        {
            Newtonsoft.Json.JsonConvert.DeserializeObject<QueryExchangeRateFromTo>(JsonFromTo);

            string JsonResult = "";
            QueryExchangeRateAsync(r => JsonResult = r).Wait();

            var res = Newtonsoft.Json.JsonConvert.DeserializeAnonymousType(JsonResult, new { ask = 0.0, bid = 0.0 });

            return Json(res);

        }

        static async Task QueryExchangeRateAsync(Action<string> SetJsonResult)
        {
            using (var client = new HttpClient())
            {
                // https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22EURUSD%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=
                client.BaseAddress = new Uri("https://query.yahooapis.com");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                client.Timeout = new TimeSpan(0, 0, 10);


                var response = await client.GetAsync("v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22EURUSD%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=");

                if (response.IsSuccessStatusCode)
                {
                    SetJsonResult(await response.Content.ReadAsAsync<string>());
                }
            }
        }
    }
}