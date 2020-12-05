using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Rol.Api.Data.Entities
{
    public class Congregation
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Address { get; set; }
        [Required]
        public bool Principal { get; set; }

        public virtual ICollection<CongregationContact> CongragationContacts { get; set; }

        public virtual ICollection<Member> Members { get; set; }
    }
}
