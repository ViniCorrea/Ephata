using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace Rol.Api.Data.Entities
{
    public class Member
    {
        public int Id { get; set; }
        
        [Required]
        [MaxLength(255)]
        public string Name { get; set; }
        public string RegistrationNumber { get; set; }
        public DateTime BirthDate { get; set; }
        public string Address { get; set; }
        public DateTime BaptismDate { get; set; }

        public DateTime CreationDate { get; set; }
        public DateTime ModificationDate { get; set; }

        public int RoleId { get; set; }
        public virtual Role Role { get; set; }

        public ICollection<MemberContact> Contacts { get; set; }

        public int CongregationId { get; set; }
        public virtual Congregation Congregation { get; set; }
    }
}
