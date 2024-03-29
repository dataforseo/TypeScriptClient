[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageResourceIssueItemInfo

# Interface: IOnPageResourceIssueItemInfo

## Implemented by

- [`OnPageResourceIssueItemInfo`](../classes/OnPageResourceIssueItemInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [column](IOnPageResourceIssueItemInfo.md#column)
- [line](IOnPageResourceIssueItemInfo.md#line)
- [message](IOnPageResourceIssueItemInfo.md#message)
- [status\_code](IOnPageResourceIssueItemInfo.md#status_code)

## Properties

### column

• `Optional` **column**: `number`

column where the error was found

#### Defined in

[main.ts:144644](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144644)

___


### line

• `Optional` **line**: `number`

line where the error was found

#### Defined in

[main.ts:144642](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144642)

___


### message

• `Optional` **message**: `string`

text message of the error
the full list of possible HTML errors can be found here

#### Defined in

[main.ts:144647](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144647)

___


### status\_code

• `Optional` **status\_code**: `number`

status code of the error
possible values:
0 — Unidentified Error;
501 — Html Parse Error;
1501 — JS Parse Error;
2501 — CSS Parse Error;
3501 — Image Parse Error;
3502 — Image Scale Is Zero;
3503 — Image Size Is Zero;
3504 — Image Format Invalid

#### Defined in

[main.ts:144658](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144658)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")