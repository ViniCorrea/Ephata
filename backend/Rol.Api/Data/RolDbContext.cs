using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Rol.Api.Data.Entities;

namespace Rol.Api.Data
{
    public class RolDbContext : DbContext
    {
        public RolDbContext(DbContextOptions options) : base(options)
        {
        }

        private DbSet<Member> Members { get; set; }
        private DbSet<MemberContact> MemberContacts { get; set; }
        private DbSet<Congregation> Congregations { get; set; }
        private DbSet<CongregationContact> CongregationContacts { get; set; }
        private DbSet<Role> Roles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Member>()
                .Property(s => s.CreationDate)
                .HasDefaultValueSql("GETDATE()");

            modelBuilder.Entity<Member>()
                .Property(s => s.ModificationDate)
                .HasDefaultValueSql("GETDATE()");

            modelBuilder.Seed();
        }
    }
}
