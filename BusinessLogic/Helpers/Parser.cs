using System;
using System.Reflection;

namespace BusinessLogic.Helpers
{
    public class Parser<T>
    {
        public delegate T ParserFunction(string value);

        public static readonly ParserFunction Parse = GetFunction();
        private static ParserFunction GetFunction()
        {
            Type t = typeof(T);
            MethodInfo m = t.GetMethod("Parse", new Type[] { typeof(string) });
            ParserFunction d = (ParserFunction)ParserFunction.CreateDelegate(typeof(ParserFunction), m);
            return d;        
        }
    }
}
