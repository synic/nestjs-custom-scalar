import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';
import { WeiScalar } from './wei.scalar';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: true,
      sortSchema: true,
      path: '/graphql',
    }),
  ],
  providers: [AppResolver, WeiScalar],
})
export class AppModule {}
