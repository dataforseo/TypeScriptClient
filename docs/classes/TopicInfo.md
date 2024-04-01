[Documentation](../README.md) / [Exports](../modules.md) / TopicInfo

# Class: TopicInfo

## Implements

- [`ITopicInfo`](../interfaces/ITopicInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TopicInfo.md#constructor)

### Properties

- [author](TopicInfo.md#author)
- [h\_title](TopicInfo.md#h_title)
- [language](TopicInfo.md#language)
- [level](TopicInfo.md#level)
- [main\_title](TopicInfo.md#main_title)
- [primary\_content](TopicInfo.md#primary_content)
- [secondary\_content](TopicInfo.md#secondary_content)

### Methods

- [init](TopicInfo.md#init)
- [toJSON](TopicInfo.md#tojson)
- [fromJS](TopicInfo.md#fromjs)

## Constructors

### constructor

• **new TopicInfo**(`data?`): [`TopicInfo`](TopicInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITopicInfo`](../interfaces/ITopicInfo.md) |

#### Returns

[`TopicInfo`](TopicInfo.md)

#### Defined in

main.ts:157534

## Properties

### author

• `Optional` **author**: `string`

content author name

#### Implementation of

[ITopicInfo](../interfaces/ITopicInfo.md).[author](../interfaces/ITopicInfo.md#author)

#### Defined in

main.ts:157520

___

### h\_title

• `Optional` **h\_title**: `string`

meta title

#### Implementation of

[ITopicInfo](../interfaces/ITopicInfo.md).[h_title](../interfaces/ITopicInfo.md#h_title)

#### Defined in

main.ts:157516

___

### language

• `Optional` **language**: `string`

content language

#### Implementation of

[ITopicInfo](../interfaces/ITopicInfo.md).[language](../interfaces/ITopicInfo.md#language)

#### Defined in

main.ts:157522

___

### level

• `Optional` **level**: `string`

HTML level

#### Implementation of

[ITopicInfo](../interfaces/ITopicInfo.md).[level](../interfaces/ITopicInfo.md#level)

#### Defined in

main.ts:157524

___

### main\_title

• `Optional` **main\_title**: `string`

main title of the block

#### Implementation of

[ITopicInfo](../interfaces/ITopicInfo.md).[main_title](../interfaces/ITopicInfo.md#main_title)

#### Defined in

main.ts:157518

___

### primary\_content

• `Optional` **primary\_content**: [`ContentItemInfo`](ContentItemInfo.md)[]

primary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[ITopicInfo](../interfaces/ITopicInfo.md).[primary_content](../interfaces/ITopicInfo.md#primary_content)

#### Defined in

main.ts:157527

___

### secondary\_content

• `Optional` **secondary\_content**: [`ContentItemInfo`](ContentItemInfo.md)[]

secondary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[ITopicInfo](../interfaces/ITopicInfo.md).[secondary_content](../interfaces/ITopicInfo.md#secondary_content)

#### Defined in

main.ts:157530

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

main.ts:157543

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

main.ts:157574

___

### fromJS

▸ **fromJS**(`data`): [`TopicInfo`](TopicInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TopicInfo`](TopicInfo.md)

#### Defined in

main.ts:157567
