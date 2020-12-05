using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Rol.Api.Data.Entities;

namespace Rol.Api
{
    public static class ModelBuilderExtensions
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CongregationContact>().HasData(
                new CongregationContact
                {
                    Id = 1,
                    Contact = "77777777",
                    ContactType = CongragationContactTypeEnum.Phone,
                    Principal = true,
                    CongregationId = 1
                },
                new CongregationContact
                {
                    Id = 2,
                    Contact = "88888888",
                    ContactType = CongragationContactTypeEnum.Phone,
                    Principal = true,
                    CongregationId = 2
                }
            );

            modelBuilder.Entity<Congregation>().HasData(
                new Congregation
                {
                    Id = 1,
                    Name = "Matriz",
                    Address = "Algum lugar",
                    Principal = true,
                    
                },
                new Congregation
                {
                    Id = 2,
                    Name = "Outro",
                    Address = "Algum outro lugar",
                    Principal = true
                }
            );

            modelBuilder.Entity<MemberContact>().HasData(
                new MemberContact
                {
                    Id = 1,
                    Contact = "55555555",
                    Principal = true,
                    ContactType = ContactTypeEnum.Phone,
                    MemberId = 1
                },
                new MemberContact
                {
                    Id = 2,
                    Contact = "44444444",
                    Principal = true,
                    ContactType = ContactTypeEnum.Phone,
                    MemberId = 2
                }
            );

            modelBuilder.Entity<Role>().HasData(
                new Role
                {
                    Id = 1,
                    Name = "Pastor"
                },
                new Role
                {
                    Id = 2,
                    Name = "Obreiro"
                }
            );

            modelBuilder.Entity<Member>().HasData(
                new Member
                {
                    Id = 1,
                    Name = "João Ninguém",
                    RegistrationNumber = "11111111",
                    Address = "Lugar nenhum",
                    BaptismDate = DateTime.Now,
                    BirthDate = DateTime.Parse("2001-01-01"),
                    CongregationId = 1,
                    RoleId = 1
                },
                new Member
                {
                    Id = 2,
                    Name = "Maria Ninguém",
                    RegistrationNumber = "22222222",
                    Address = "Lugar outro nenhum",
                    BaptismDate = DateTime.Now,
                    BirthDate = DateTime.Parse("2002-02-02"),
                    CongregationId = 2,
                    RoleId = 2
                }
            );
        }
    }
}
