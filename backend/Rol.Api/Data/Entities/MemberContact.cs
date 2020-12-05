using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace Rol.Api.Data.Entities
{
    public class MemberContact
    {
        public int Id { get; set; }
        [Required]
        public ContactTypeEnum ContactType { get; set; }
        [Required]
        public string Contact { get; set; }
        public bool Principal { get; set; }

        //Foreign key for Member
        public int MemberId { get; set; }
        public Member Member { get; set; }
    }

    public enum ContactTypeEnum
    {
        Phone,
        Email
    }
}
