#include <node.h>
#include <v8.h>

using namespace v8;

void SumOperation(const v8::FunctionCallbackInfo<v8::Value>& args) {
  Isolate* isolate = args.GetIsolate();

  double a = args[0]->NumberValue();
  double b = args[1]->NumberValue();

  double result = a + b;

  Local<Number> retval = v8::Number::New(isolate, result);
  args.GetReturnValue().Set(retval);
}

void init(Handle <Object> exports, Handle<Object> module) {
 NODE_SET_METHOD(exports, "sum", SumOperation);
}

NODE_MODULE(sum, init)
