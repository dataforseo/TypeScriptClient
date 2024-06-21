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

main.ts:160905

## Properties

### author?

> **`optional`** **author**: `string`

content author name

#### Implementation of

[`ISecondaryTopic`](../interfaces/ISecondaryTopic.md).[`author`](../interfaces/ISecondaryTopic.md#author)

#### Source

main.ts:160889

***

### h\_title?

> **`optional`** **h\_title**: `string`

meta title

#### Implementation of

[`ISecondaryTopic`](../interfaces/ISecondaryTopic.md).[`h_title`](../interfaces/ISecondaryTopic.md#h_title)

#### Source

main.ts:160885

***

### language?

> **`optional`** **language**: `string`

content language

#### Implementation of

[`ISecondaryTopic`](../interfaces/ISecondaryTopic.md).[`language`](../interfaces/ISecondaryTopic.md#language)

#### Source

main.ts:160891

***

### level?

> **`optional`** **level**: `number`

HTML level

#### Implementation of

[`ISecondaryTopic`](../interfaces/ISecondaryTopic.md).[`level`](../interfaces/ISecondaryTopic.md#level)

#### Source

main.ts:160893

***

### main\_title?

> **`optional`** **main\_title**: `string`

main title of the block

#### Implementation of

[`ISecondaryTopic`](../interfaces/ISecondaryTopic.md).[`main_title`](../interfaces/ISecondaryTopic.md#main_title)

#### Source

main.ts:160887

***

### primary\_content?

> **`optional`** **primary\_content**: `string`

primary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`ISecondaryTopic`](../interfaces/ISecondaryTopic.md).[`primary_content`](../interfaces/ISecondaryTopic.md#primary_content)

#### Source

main.ts:160896

***

### secondary\_content?

> **`optional`** **secondary\_content**: [`ContentItemInfo`](ContentItemInfo.md)[]

secondary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`ISecondaryTopic`](../interfaces/ISecondaryTopic.md).[`secondary_content`](../interfaces/ISecondaryTopic.md#secondary_content)

#### Source

main.ts:160899

***

### table\_content?

> **`optional`** **table\_content**: [`TableContent`](TableContent.md)[]

content of the table on the page

#### Implementation of

[`ISecondaryTopic`](../interfaces/ISecondaryTopic.md).[`table_content`](../interfaces/ISecondaryTopic.md#table_content)

#### Source

main.ts:160901

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:160914

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:160946

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SecondaryTopic`](SecondaryTopic.md)

#### Parameters

• **data**: `any`

#### Returns

[`SecondaryTopic`](SecondaryTopic.md)

#### Source

main.ts:160939
