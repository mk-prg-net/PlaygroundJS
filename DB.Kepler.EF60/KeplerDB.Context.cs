﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class KeplerDBEntities : DbContext
    {
        public KeplerDBEntities()
            : base("name=KeplerDBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Aufgabe> AufgabenTab { get; set; }
        public virtual DbSet<Himmelskoerper> HimmelskoerperTab { get; set; }
        public virtual DbSet<HimmelskoerperTyp> HimmelskoerperTypenTab { get; set; }
        public virtual DbSet<Land> LaenderTab { get; set; }
        public virtual DbSet<Raumschiff> RaumschiffeTab { get; set; }
        public virtual DbSet<Sterne_Planeten_Monde> Sterne_Planeten_MondeTab { get; set; }
        public virtual DbSet<Umlaufbahn> UmlaufbahnenTab { get; set; }
        public virtual DbSet<UrlSammlung> UrlSammlungenTab { get; set; }
        public virtual DbSet<Bild> BildTab { get; set; }
        public virtual DbSet<Spektralklasse> SpektralklasseTab { get; set; }
    }
}
