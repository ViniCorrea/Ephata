using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HotChocolate.Types;
using Rol.Api.Data.Entities;

namespace Rol.Api.Data.Queries
{
    [ExtendObjectType(Name = "Query")]
    public class MemberQuery
    {
        public IEnumerable<Member> GetMembers() =>
            new List<Member>
            {
                new Member
                {
                 Id   = 1,
                 Name = "João Ningém"
                },
                new Member
                {
                    Id   = 2,
                    Name = "Maria Ningém"
                }
            };
    }
}
