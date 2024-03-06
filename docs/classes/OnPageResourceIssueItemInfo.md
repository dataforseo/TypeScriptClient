[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageResourceIssueItemInfo

# Class: OnPageResourceIssueItemInfo

## Implements

- [`IOnPageResourceIssueItemInfo`](../interfaces/IOnPageResourceIssueItemInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageResourceIssueItemInfo.md#constructor)

### Properties

- [column](OnPageResourceIssueItemInfo.md#column)
- [line](OnPageResourceIssueItemInfo.md#line)
- [message](OnPageResourceIssueItemInfo.md#message)
- [status\_code](OnPageResourceIssueItemInfo.md#status_code)

### Methods

- [init](OnPageResourceIssueItemInfo.md#init)
- [toJSON](OnPageResourceIssueItemInfo.md#tojson)
- [fromJS](OnPageResourceIssueItemInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageResourceIssueItemInfo**(`data?`): [`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageResourceIssueItemInfo`](../interfaces/IOnPageResourceIssueItemInfo.md) |

#### Returns

[`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)

#### Defined in

[main.ts:144597](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144597)

## Properties

### column

• `Optional` **column**: `number`

column where the error was found

#### Implementation of

[IOnPageResourceIssueItemInfo](../interfaces/IOnPageResourceIssueItemInfo.md).[column](../interfaces/IOnPageResourceIssueItemInfo.md#column)

#### Defined in

[main.ts:144579](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144579)

___


### line

• `Optional` **line**: `number`

line where the error was found

#### Implementation of

[IOnPageResourceIssueItemInfo](../interfaces/IOnPageResourceIssueItemInfo.md).[line](../interfaces/IOnPageResourceIssueItemInfo.md#line)

#### Defined in

[main.ts:144577](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144577)

___


### message

• `Optional` **message**: `string`

text message of the error
the full list of possible HTML errors can be found here

#### Implementation of

[IOnPageResourceIssueItemInfo](../interfaces/IOnPageResourceIssueItemInfo.md).[message](../interfaces/IOnPageResourceIssueItemInfo.md#message)

#### Defined in

[main.ts:144582](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144582)

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

#### Implementation of

[IOnPageResourceIssueItemInfo](../interfaces/IOnPageResourceIssueItemInfo.md).[status_code](../interfaces/IOnPageResourceIssueItemInfo.md#status_code)

#### Defined in

[main.ts:144593](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144593)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:144606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144606)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:144626](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144626)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)

#### Defined in

[main.ts:144619](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144619)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")