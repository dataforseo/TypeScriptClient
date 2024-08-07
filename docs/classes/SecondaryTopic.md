**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SecondaryTopic

# Class: SecondaryTopic

## Implements

- [`ISecondaryTopic`](../interfaces/ISecondaryTopic.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SecondaryTopic(data)

> **new SecondaryTopic**(`data`?): [`SecondaryTopic`](SecondaryTopic.md)

#### Parameters

• **data?**: [`ISecondaryTopic`](../interfaces/ISecondaryTopic.md)

#### Returns

[`SecondaryTopic`](SecondaryTopic.md)

#### Source

main.ts:161153

## Properties

### author?

> **`optional`** **author**: `string`

content author name

#### Implementation of

[`ISecondaryTopic`](../interfaces/ISecondaryTopic.md).[`author`](../interfaces/ISecondaryTopic.md#author)

#### Source

main.ts:161137

***

### h\_title?

> **`optional`** **h\_title**: `string`

meta title

#### Implementation of

[`ISecondaryTopic`](../interfaces/ISecondaryTopic.md).[`h_title`](../interfaces/ISecondaryTopic.md#h_title)

#### Source

main.ts:161133

***

### language?

> **`optional`** **language**: `string`

content language

#### Implementation of

[`ISecondaryTopic`](../interfaces/ISecondaryTopic.md).[`language`](../interfaces/ISecondaryTopic.md#language)

#### Source

main.ts:161139

***

### level?

> **`optional`** **level**: `number`

HTML level

#### Implementation of

[`ISecondaryTopic`](../interfaces/ISecondaryTopic.md).[`level`](../interfaces/ISecondaryTopic.md#level)

#### Source

main.ts:161141

***

### main\_title?

> **`optional`** **main\_title**: `string`

main title of the block

#### Implementation of

[`ISecondaryTopic`](../interfaces/ISecondaryTopic.md).[`main_title`](../interfaces/ISecondaryTopic.md#main_title)

#### Source

main.ts:161135

***

### primary\_content?

> **`optional`** **primary\_content**: `string`

primary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`ISecondaryTopic`](../interfaces/ISecondaryTopic.md).[`primary_content`](../interfaces/ISecondaryTopic.md#primary_content)

#### Source

main.ts:161144

***

### secondary\_content?

> **`optional`** **secondary\_content**: [`ContentItemInfo`](ContentItemInfo.md)[]

secondary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`ISecondaryTopic`](../interfaces/ISecondaryTopic.md).[`secondary_content`](../interfaces/ISecondaryTopic.md#secondary_content)

#### Source

main.ts:161147

***

### table\_content?

> **`optional`** **table\_content**: [`TableContent`](TableContent.md)[]

content of the table on the page

#### Implementation of

[`ISecondaryTopic`](../interfaces/ISecondaryTopic.md).[`table_content`](../interfaces/ISecondaryTopic.md#table_content)

#### Source

main.ts:161149

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:161162

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:161194

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SecondaryTopic`](SecondaryTopic.md)

#### Parameters

• **data**: `any`

#### Returns

[`SecondaryTopic`](SecondaryTopic.md)

#### Source

main.ts:161187
