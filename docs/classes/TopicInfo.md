**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / TopicInfo

# Class: TopicInfo

## Implements

- [`ITopicInfo`](../interfaces/ITopicInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TopicInfo(data)

> **new TopicInfo**(`data`?): [`TopicInfo`](TopicInfo.md)

#### Parameters

• **data?**: [`ITopicInfo`](../interfaces/ITopicInfo.md)

#### Returns

[`TopicInfo`](TopicInfo.md)

#### Source

main.ts:157542

## Properties

### author?

> **`optional`** **author**: `string`

content author name

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`author`](../interfaces/ITopicInfo.md#author)

#### Source

main.ts:157528

***

### h\_title?

> **`optional`** **h\_title**: `string`

meta title

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`h_title`](../interfaces/ITopicInfo.md#h_title)

#### Source

main.ts:157524

***

### language?

> **`optional`** **language**: `string`

content language

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`language`](../interfaces/ITopicInfo.md#language)

#### Source

main.ts:157530

***

### level?

> **`optional`** **level**: `string`

HTML level

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`level`](../interfaces/ITopicInfo.md#level)

#### Source

main.ts:157532

***

### main\_title?

> **`optional`** **main\_title**: `string`

main title of the block

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`main_title`](../interfaces/ITopicInfo.md#main_title)

#### Source

main.ts:157526

***

### primary\_content?

> **`optional`** **primary\_content**: [`ContentItemInfo`](ContentItemInfo.md)[]

primary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`primary_content`](../interfaces/ITopicInfo.md#primary_content)

#### Source

main.ts:157535

***

### secondary\_content?

> **`optional`** **secondary\_content**: [`ContentItemInfo`](ContentItemInfo.md)[]

secondary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`secondary_content`](../interfaces/ITopicInfo.md#secondary_content)

#### Source

main.ts:157538

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:157551

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:157582

***

### fromJS()

> **`static`** **fromJS**(`data`): [`TopicInfo`](TopicInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`TopicInfo`](TopicInfo.md)

#### Source

main.ts:157575
