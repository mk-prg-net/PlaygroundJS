using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HTML5.Models.E01_StructureAndStyle
{
    public class StyleSelector
    {
        public enum Styles
        {
            none,
            simple,
            responsive
        }

        public Styles Style
        {
            get;
            set;
        }
    }
}