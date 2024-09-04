[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / TopicInfo

# Class: TopicInfo

## Implements

- [`ITopicInfo`](../interfaces/ITopicInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TopicInfo()

> **new TopicInfo**(`data`?): [`TopicInfo`](TopicInfo.md)

#### Parameters

• **data?**: [`ITopicInfo`](../interfaces/ITopicInfo.md)

#### Returns

[`TopicInfo`](TopicInfo.md)

#### Defined in

main.ts:161662

## Properties

### author?

> `optional` **author**: `string`

content author name

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`author`](../interfaces/ITopicInfo.md#author)

#### Defined in

main.ts:161646

***

### h\_title?

> `optional` **h\_title**: `string`

meta title

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`h_title`](../interfaces/ITopicInfo.md#h_title)

#### Defined in

main.ts:161642

***

### language?

> `optional` **language**: `string`

content language

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`language`](../interfaces/ITopicInfo.md#language)

#### Defined in

main.ts:161648

***

### level?

> `optional` **level**: `number`

HTML level

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`level`](../interfaces/ITopicInfo.md#level)

#### Defined in

main.ts:161650

***

### main\_title?

> `optional` **main\_title**: `string`

main title of the block

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`main_title`](../interfaces/ITopicInfo.md#main_title)

#### Defined in

main.ts:161644

***

### primary\_content?

> `optional` **primary\_content**: [`ContentItemInfo`](ContentItemInfo.md)[]

primary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`primary_content`](../interfaces/ITopicInfo.md#primary_content)

#### Defined in

main.ts:161653

***

### secondary\_content?

> `optional` **secondary\_content**: [`ContentItemInfo`](ContentItemInfo.md)[]

secondary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`secondary_content`](../interfaces/ITopicInfo.md#secondary_content)

#### Defined in

main.ts:161656

***

### table\_content?

> `optional` **table\_content**: [`TableContent`](TableContent.md)[]

content of the table on the page

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`table_content`](../interfaces/ITopicInfo.md#table_content)

#### Defined in

main.ts:161658

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:161671

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:161707

***

### fromJS()

> `static` **fromJS**(`data`): [`TopicInfo`](TopicInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`TopicInfo`](TopicInfo.md)

#### Defined in

main.ts:161700
