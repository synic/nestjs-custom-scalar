import { CustomScalar, Scalar } from '@nestjs/graphql';
import { GraphQLError, Kind, ValueNode } from 'graphql';

export class Wei extends String {}

@Scalar('Wei', () => Wei)
export class WeiScalar implements CustomScalar<string, Wei> {
  parseValue(value: string): Wei {
    return value;
  }

  serialize(value: Wei): string {
    return value.toString();
  }

  parseLiteral(ast: ValueNode): Wei {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(`Invalid Wei value type: ${ast.kind}`);
    }
    return ast.value;
  }
}
