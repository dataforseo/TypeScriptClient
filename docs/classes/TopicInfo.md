[**Documentation**](../README.md)

***

[Documentation](../README.md) / TopicInfo

# Class: TopicInfo

Defined in: main.ts:174188

## Implements

- [`ITopicInfo`](../interfaces/ITopicInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new TopicInfo()

> **new TopicInfo**(`data`?): [`TopicInfo`](TopicInfo.md)

Defined in: main.ts:174210

#### Parameters

##### data?

[`ITopicInfo`](../interfaces/ITopicInfo.md)

#### Returns

[`TopicInfo`](TopicInfo.md)

## Properties

### author?

> `optional` **author**: `string`

Defined in: main.ts:174194

content author name

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`author`](../interfaces/ITopicInfo.md#author)

***

### h\_title?

> `optional` **h\_title**: `string`

Defined in: main.ts:174190

meta title

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`h_title`](../interfaces/ITopicInfo.md#h_title)

***

### language?

> `optional` **language**: `string`

Defined in: main.ts:174196

content language

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`language`](../interfaces/ITopicInfo.md#language)

***

### level?

> `optional` **level**: `string`

Defined in: main.ts:174198

HTML level

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`level`](../interfaces/ITopicInfo.md#level)

***

### main\_title?

> `optional` **main\_title**: `string`

Defined in: main.ts:174192

main title of the block

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`main_title`](../interfaces/ITopicInfo.md#main_title)

***

### primary\_content?

> `optional` **primary\_content**: [`ContentItemInfo`](ContentItemInfo.md)[]

Defined in: main.ts:174201

primary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`primary_content`](../interfaces/ITopicInfo.md#primary_content)

***

### secondary\_content?

> `optional` **secondary\_content**: [`ContentItemInfo`](ContentItemInfo.md)[]

Defined in: main.ts:174204

secondary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`secondary_content`](../interfaces/ITopicInfo.md#secondary_content)

***

### table\_content?

> `optional` **table\_content**: [`TableContent`](TableContent.md)[]

Defined in: main.ts:174206

content of the table on the page

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`table_content`](../interfaces/ITopicInfo.md#table_content)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:174219

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:174255

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`TopicInfo`](TopicInfo.md)

Defined in: main.ts:174248

#### Parameters

##### data

`any`

#### Returns

[`TopicInfo`](TopicInfo.md)
