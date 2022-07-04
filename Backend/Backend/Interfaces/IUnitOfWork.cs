﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Interfaces
{
    public interface IUnitOfWork
    {
        IAccountRepository AccountRepository { get; }

        Task<bool> SaveAsync();
    }
}
