import { File } from '@asyncapi/generator-react-sdk';
export default function clientNotConnectedFile({ params, asyncapi }) {
  const namespace = params.projectName ? params.projectName : 'Asyncapi.Nats.Client';
  return <File name={'ClientNotConnected.cs'}> {
    `using System;

namespace ${namespace}
{
  [Serializable()]
  public class ClientNotConnected : System.Exception
  {
    public ClientNotConnected() : base() {}
    public ClientNotConnected(string message) : base(message) {}
    public ClientNotConnected(string message, System.Exception inner) : base(message, inner) {}

    protected ClientNotConnected(System.Runtime.Serialization.SerializationInfo info,
    System.Runtime.Serialization.StreamingContext context) : base(info, context) {}
  }
}`
  }</File>;
}
