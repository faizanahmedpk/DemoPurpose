using Microsoft.EntityFrameworkCore;

namespace DemoPurpose.Server.Models;

public partial class DemoPurposeContext : DbContext
{

    public DemoPurposeContext()
    {
    }

    public DemoPurposeContext(DbContextOptions<DemoPurposeContext> options)
        : base(options)
    {
    }

    public virtual DbSet<BusinessPartner> BusinessPartners { get; set; }

    public virtual DbSet<MstClient> MstClients { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.;Database=DemoPurpose;user=sa;password=abcd123$;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<BusinessPartner>(entity =>
        {
            entity.ToTable("BusinessPartner");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Billing)
                .HasMaxLength(150)
                .HasColumnName("billing");
            entity.Property(e => e.BondWaiverReason)
                .HasMaxLength(150)
                .HasColumnName("bondWaiverReason");
            entity.Property(e => e.CardCode)
                .HasMaxLength(50)
                .HasColumnName("cardCode");
            entity.Property(e => e.City)
                .HasMaxLength(50)
                .HasColumnName("city");
            entity.Property(e => e.ClientId)
                .HasMaxLength(50)
                .HasColumnName("clientId");
            entity.Property(e => e.ClientName)
                .HasMaxLength(150)
                .HasColumnName("clientName");
            entity.Property(e => e.ContactPerson)
                .HasMaxLength(150)
                .HasColumnName("contactPerson");
            entity.Property(e => e.CountryCode)
                .HasMaxLength(10)
                .HasColumnName("countryCode");
            entity.Property(e => e.CountryName)
                .HasMaxLength(150)
                .HasColumnName("countryName");
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(50)
                .HasColumnName("createdBy");
            entity.Property(e => e.CreatedById).HasColumnName("createdById");
            entity.Property(e => e.CreatedDate).HasColumnName("createdDate");
            entity.Property(e => e.DesignatedNotifyParty)
                .HasMaxLength(150)
                .HasColumnName("designatedNotifyParty");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .HasColumnName("email");
            entity.Property(e => e.Fax)
                .HasMaxLength(50)
                .HasColumnName("fax");
            entity.Property(e => e.FlgAcceleratedPayment).HasColumnName("flgAcceleratedPayment");
            entity.Property(e => e.FlgEnableDrawback).HasColumnName("flgEnableDrawback");
            entity.Property(e => e.FlgPriorNotice).HasColumnName("flgPriorNotice");
            entity.Property(e => e.Industry)
                .HasMaxLength(50)
                .HasColumnName("industry");
            entity.Property(e => e.IsDeleted)
                .HasDefaultValue(false)
                .HasColumnName("isDeleted");
            entity.Property(e => e.LandedCost)
                .HasMaxLength(150)
                .HasColumnName("landedCost");
            entity.Property(e => e.ModifiedBy)
                .HasMaxLength(50)
                .HasColumnName("modifiedBy");
            entity.Property(e => e.ModifiedById).HasColumnName("modifiedById");
            entity.Property(e => e.ModifiedDate).HasColumnName("modifiedDate");
            entity.Property(e => e.OpsController)
                .HasMaxLength(50)
                .HasColumnName("opsController");
            entity.Property(e => e.PrintableAddress)
                .HasMaxLength(250)
                .HasColumnName("printableAddress");
            entity.Property(e => e.State)
                .HasMaxLength(50)
                .HasColumnName("state");
            entity.Property(e => e.Street)
                .HasMaxLength(250)
                .HasColumnName("street");
            entity.Property(e => e.Telephone)
                .HasMaxLength(50)
                .HasColumnName("telephone");
            entity.Property(e => e.Terms).HasColumnType("text");
            entity.Property(e => e.Type)
                .HasMaxLength(50)
                .HasColumnName("type");
            entity.Property(e => e.Website).HasMaxLength(150);
            entity.Property(e => e.ZipCode)
                .HasMaxLength(50)
                .HasColumnName("zipCode");
        });

        modelBuilder.Entity<MstClient>(entity =>
        {
            entity.ToTable("MST_Clients");

            entity.Property(e => e.ClientType)
                .HasMaxLength(50)
                .HasColumnName("clientType");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
