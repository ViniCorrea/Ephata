using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace Rol.Api.Data.Entities
{
    public class CongregationContact
    {
        public int Id { get; set; }
        public CongragationContactTypeEnum ContactType { get; set; }
        public string Contact { get; set; }
        public bool Principal { get; set; }

        //Foreign key for Congregation
        public int CongregationId { get; set; }
        public virtual Congregation Congregation { get; set; }
    }

    public enum CongragationContactTypeEnum
    {
        Phone,
        Email
    }
}
