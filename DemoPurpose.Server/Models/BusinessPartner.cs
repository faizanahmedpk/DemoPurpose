using System;
using System.Collections.Generic;

namespace DemoPurpose.Server.Models;

public partial class BusinessPartner
{
    public int Id { get; set; }

    public string? Type { get; set; }

    public string? CardCode { get; set; }

    public string? ClientId { get; set; }

    public string? ClientName { get; set; }

    public string? Street { get; set; }

    public string? City { get; set; }

    public string? State { get; set; }

    public string? ZipCode { get; set; }

    public string? CountryCode { get; set; }

    public string? CountryName { get; set; }

    public string? ContactPerson { get; set; }

    public string? Telephone { get; set; }

    public string? Email { get; set; }

    public string? Fax { get; set; }

    public string? PrintableAddress { get; set; }

    public string? OpsController { get; set; }

    public string? Billing { get; set; }

    public string? LandedCost { get; set; }

    public string? Terms { get; set; }

    public string? Website { get; set; }

    public bool? Documentation { get; set; }

    public int? AttachmentEntry { get; set; }

    public bool? FlgEnableDrawback { get; set; }

    public bool? FlgAcceleratedPayment { get; set; }

    public bool? FlgPriorNotice { get; set; }

    public string? DesignatedNotifyParty { get; set; }

    public string? BondWaiverReason { get; set; }

    public string? Industry { get; set; }

    public bool? IsDeleted { get; set; }

    public int? CreatedById { get; set; }

    public string? CreatedBy { get; set; }

    public DateOnly? CreatedDate { get; set; }

    public int? ModifiedById { get; set; }

    public string? ModifiedBy { get; set; }

    public DateOnly? ModifiedDate { get; set; }
}
