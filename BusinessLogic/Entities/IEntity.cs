using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace BusinessLogic.Entities
{
    public interface IEntity<E>
    {
        E Construct(DataRow row);
    }
}
