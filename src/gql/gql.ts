/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
  "\n  mutation RegisterMutation($input: CreateUserInput!) {\n    createUser(input: $input){\n      user {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n":
    types.RegisterMutationDocument,
  "\n  mutation LoginMutation($email: String!, $password: String!) {\n    tokenAuth(email: $email, password: $password) {\n      token\n    }\n  }\n":
    types.LoginMutationDocument,
  "\n  query Me {\n    me {\n      id\n      firstName\n      lastName\n      email\n      isActive\n      phone\n    }\n  }\n":
    types.MeDocument,
  "\n  fragment Project on ProjectNode {\n    id\n    name\n    description\n    createdAt\n    updatedAt\n  }\n":
    types.ProjectFragmentDoc,
  "\n  mutation CreateProject($input: CreateProjectInput!) {\n    createProject(input: $input) {\n      project {\n        ...Project\n      }\n    }\n  }\n":
    types.CreateProjectDocument,
  "\n  mutation UpdateProject($input: UpdateProjectInput!) {\n    updateProject(input: $input) {\n      project {\n        ...Project\n      }\n    }\n  }\n":
    types.UpdateProjectDocument,
  "\n  fragment Note on NoteNode {\n    id\n    title\n    content\n    createdAt\n    updatedAt\n  }\n":
    types.NoteFragmentDoc,
  "\n  mutation CreateNote($input: CreateNoteInput!) {\n    createNote(input: $input) {\n      note {\n        ...Note\n      }\n    }\n  }\n":
    types.CreateNoteDocument,
  "\n  query Note($id: ID!) {\n    note(id: $id) {\n      ...Note\n    }\n  }\n":
    types.NoteDocument,
  "\n  query Notes($projectId: String!) {\n    notes(projectId: $projectId) {\n      edges {\n        node {\n          ...Note\n        }\n      }\n    }\n  }\n":
    types.NotesDocument,
  "\n  query Projects {\n    projects {\n      edges {\n        node {\n          ...Project\n        }\n      }\n    }\n  }\n":
    types.ProjectsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation RegisterMutation($input: CreateUserInput!) {\n    createUser(input: $input){\n      user {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation RegisterMutation($input: CreateUserInput!) {\n    createUser(input: $input){\n      user {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation LoginMutation($email: String!, $password: String!) {\n    tokenAuth(email: $email, password: $password) {\n      token\n    }\n  }\n",
): (typeof documents)["\n  mutation LoginMutation($email: String!, $password: String!) {\n    tokenAuth(email: $email, password: $password) {\n      token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Me {\n    me {\n      id\n      firstName\n      lastName\n      email\n      isActive\n      phone\n    }\n  }\n",
): (typeof documents)["\n  query Me {\n    me {\n      id\n      firstName\n      lastName\n      email\n      isActive\n      phone\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment Project on ProjectNode {\n    id\n    name\n    description\n    createdAt\n    updatedAt\n  }\n",
): (typeof documents)["\n  fragment Project on ProjectNode {\n    id\n    name\n    description\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CreateProject($input: CreateProjectInput!) {\n    createProject(input: $input) {\n      project {\n        ...Project\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation CreateProject($input: CreateProjectInput!) {\n    createProject(input: $input) {\n      project {\n        ...Project\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateProject($input: UpdateProjectInput!) {\n    updateProject(input: $input) {\n      project {\n        ...Project\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation UpdateProject($input: UpdateProjectInput!) {\n    updateProject(input: $input) {\n      project {\n        ...Project\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment Note on NoteNode {\n    id\n    title\n    content\n    createdAt\n    updatedAt\n  }\n",
): (typeof documents)["\n  fragment Note on NoteNode {\n    id\n    title\n    content\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CreateNote($input: CreateNoteInput!) {\n    createNote(input: $input) {\n      note {\n        ...Note\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation CreateNote($input: CreateNoteInput!) {\n    createNote(input: $input) {\n      note {\n        ...Note\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Note($id: ID!) {\n    note(id: $id) {\n      ...Note\n    }\n  }\n",
): (typeof documents)["\n  query Note($id: ID!) {\n    note(id: $id) {\n      ...Note\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Notes($projectId: String!) {\n    notes(projectId: $projectId) {\n      edges {\n        node {\n          ...Note\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query Notes($projectId: String!) {\n    notes(projectId: $projectId) {\n      edges {\n        node {\n          ...Note\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Projects {\n    projects {\n      edges {\n        node {\n          ...Project\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query Projects {\n    projects {\n      edges {\n        node {\n          ...Project\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
