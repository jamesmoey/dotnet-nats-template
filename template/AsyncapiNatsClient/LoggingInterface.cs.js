import { File } from '@asyncapi/generator-react-sdk';
export default function clientNotConnectedFile({ params, asyncapi }) {
  const namespace = params.projectName ? params.projectName : 'Asyncapi.Nats.Client';
  return <File name={'LoggingInterface.cs'}> {
    `using System;
namespace ${namespace}
{
  public interface LoggingInterface
  {
    void Info(String m);
    void Error(String m);
    void Debug(String m);
  }
}`
  }</File>;
}
