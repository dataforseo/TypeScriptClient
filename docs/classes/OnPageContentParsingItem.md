[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageContentParsingItem

# Class: OnPageContentParsingItem

## Implements

- [`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageContentParsingItem.md#constructor)

### Properties

- [fetch\_time](OnPageContentParsingItem.md#fetch_time)
- [page\_content](OnPageContentParsingItem.md#page_content)
- [status\_code](OnPageContentParsingItem.md#status_code)
- [type](OnPageContentParsingItem.md#type)

### Methods

- [init](OnPageContentParsingItem.md#init)
- [toJSON](OnPageContentParsingItem.md#tojson)
- [fromJS](OnPageContentParsingItem.md#fromjs)

## Constructors

### constructor

• **new OnPageContentParsingItem**(`data?`): [`OnPageContentParsingItem`](OnPageContentParsingItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md) |

#### Returns

[`OnPageContentParsingItem`](OnPageContentParsingItem.md)

#### Defined in

[main.ts:152295](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152295)

## Properties

### fetch\_time

• `Optional` **fetch\_time**: `string`

date and time when the content was fethced
example:
"2022-11-01 10:02:52 +00:00"

#### Implementation of

[IOnPageContentParsingItem](../interfaces/IOnPageContentParsingItem.md).[fetch_time](../interfaces/IOnPageContentParsingItem.md#fetch_time)

#### Defined in

[main.ts:152287](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152287)

___


### page\_content

• `Optional` **page\_content**: [`PageContentInfo`](PageContentInfo.md)

parsed content of the page

#### Implementation of

[IOnPageContentParsingItem](../interfaces/IOnPageContentParsingItem.md).[page_content](../interfaces/IOnPageContentParsingItem.md#page_content)

#### Defined in

[main.ts:152291](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152291)

___


### status\_code

• `Optional` **status\_code**: `number`

status code of the page

#### Implementation of

[IOnPageContentParsingItem](../interfaces/IOnPageContentParsingItem.md).[status_code](../interfaces/IOnPageContentParsingItem.md#status_code)

#### Defined in

[main.ts:152289](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152289)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IOnPageContentParsingItem](../interfaces/IOnPageContentParsingItem.md).[type](../interfaces/IOnPageContentParsingItem.md#type)

#### Defined in

[main.ts:152283](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152283)

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

[main.ts:152304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152304)

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

[main.ts:152324](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152324)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageContentParsingItem`](OnPageContentParsingItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageContentParsingItem`](OnPageContentParsingItem.md)

#### Defined in

[main.ts:152317](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152317)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")