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
    }
}
