//------------------------------------------------------------------------------
// <auto-generated>
//     Der Code wurde von einer Vorlage generiert.
//
//     Manuelle Änderungen an dieser Datei führen möglicherweise zu unerwartetem Verhalten der Anwendung.
//     Manuelle Änderungen an dieser Datei werden überschrieben, wenn der Code neu generiert wird.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DB.Kepler.EF60
{
    using System;
    using System.Collections.Generic;
    
    public partial class Bild
    {
        public int HimmelskoerperID { get; set; }
        public byte[] Bilddaten { get; set; }
    
        public virtual Himmelskoerper Himmelskoerper { get; set; }
    }
}