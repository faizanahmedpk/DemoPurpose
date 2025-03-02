using System;
using System.Collections.Generic;

namespace DemoPurpose.Server.Models;

public partial class MstClient
{
    public int Id { get; set; }

    public string ClientType { get; set; } = null!;
}
