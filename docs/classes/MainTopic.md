**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MainTopic

# Class: MainTopic

## Implements

- [`IMainTopic`](../interfaces/IMainTopic.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MainTopic(data)

> **new MainTopic**(`data`?): [`MainTopic`](MainTopic.md)

#### Parameters

• **data?**: [`IMainTopic`](../interfaces/IMainTopic.md)

#### Returns

[`MainTopic`](MainTopic.md)

#### Source

main.ts:161033

## Properties

### author?

> **`optional`** **author**: `string`

content author name

#### Implementation of

[`IMainTopic`](../interfaces/IMainTopic.md).[`author`](../interfaces/IMainTopic.md#author)

#### Source

main.ts:161017

***

### h\_title?

> **`optional`** **h\_title**: `string`

meta title

#### Implementation of

[`IMainTopic`](../interfaces/IMainTopic.md).[`h_title`](../interfaces/IMainTopic.md#h_title)

#### Source

main.ts:161013

***

### language?

> **`optional`** **language**: `string`

content language

#### Implementation of

[`IMainTopic`](../interfaces/IMainTopic.md).[`language`](../interfaces/IMainTopic.md#language)

#### Source

main.ts:161019

***

### level?

> **`optional`** **level**: `number`

HTML level

#### Implementation of

[`IMainTopic`](../interfaces/IMainTopic.md).[`level`](../interfaces/IMainTopic.md#level)

#### Source

main.ts:161021

***

### main\_title?

> **`optional`** **main\_title**: `string`

main title of the block

#### Implementation of

[`IMainTopic`](../interfaces/IMainTopic.md).[`main_title`](../interfaces/IMainTopic.md#main_title)

#### Source

main.ts:161015

***

### primary\_content?

> **`optional`** **primary\_content**: [`ContentItemInfo`](ContentItemInfo.md)[]

primary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`IMainTopic`](../interfaces/IMainTopic.md).[`primary_content`](../interfaces/IMainTopic.md#primary_content)

#### Source

main.ts:161024

***

### secondary\_content?

> **`optional`** **secondary\_content**: [`ContentItemInfo`](ContentItemInfo.md)[]

secondary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`IMainTopic`](../interfaces/IMainTopic.md).[`secondary_content`](../interfaces/IMainTopic.md#secondary_content)

#### Source

main.ts:161027

***

### table\_content?

> **`optional`** **table\_content**: [`TableContent`](TableContent.md)[]

content of the table on the page

#### Implementation of

[`IMainTopic`](../interfaces/IMainTopic.md).[`table_content`](../interfaces/IMainTopic.md#table_content)

#### Source

main.ts:161029

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:161042

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:161078

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MainTopic`](MainTopic.md)

#### Parameters

• **data**: `any`

#### Returns

[`MainTopic`](MainTopic.md)

#### Source

main.ts:161071
