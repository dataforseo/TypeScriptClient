**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MapsPaidItemSerpElementItem

# Class: MapsPaidItemSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IMapsPaidItemSerpElementItem`](../interfaces/IMapsPaidItemSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MapsPaidItemSerpElementItem(data)

> **new MapsPaidItemSerpElementItem**(`data`?): [`MapsPaidItemSerpElementItem`](MapsPaidItemSerpElementItem.md)

#### Parameters

• **data?**: [`IMapsPaidItemSerpElementItem`](../interfaces/IMapsPaidItemSerpElementItem.md)

#### Returns

[`MapsPaidItemSerpElementItem`](MapsPaidItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:39488

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19788

***

### domain?

> **`optional`** **domain**: `string`

domain in the SERP element

#### Implementation of

[`IMapsPaidItemSerpElementItem`](../interfaces/IMapsPaidItemSerpElementItem.md).[`domain`](../interfaces/IMapsPaidItemSerpElementItem.md#domain)

#### Source

main.ts:39474

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IMapsPaidItemSerpElementItem`](../interfaces/IMapsPaidItemSerpElementItem.md).[`rank_absolute`](../interfaces/IMapsPaidItemSerpElementItem.md#rank_absolute)

#### Source

main.ts:39472

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IMapsPaidItemSerpElementItem`](../interfaces/IMapsPaidItemSerpElementItem.md).[`rank_group`](../interfaces/IMapsPaidItemSerpElementItem.md#rank_group)

#### Source

main.ts:39469

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IMapsPaidItemSerpElementItem`](../interfaces/IMapsPaidItemSerpElementItem.md).[`rating`](../interfaces/IMapsPaidItemSerpElementItem.md#rating)

#### Source

main.ts:39481

***

### rating\_distribution?

> **`optional`** **rating\_distribution**: `Object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IMapsPaidItemSerpElementItem`](../interfaces/IMapsPaidItemSerpElementItem.md).[`rating_distribution`](../interfaces/IMapsPaidItemSerpElementItem.md#rating_distribution)

#### Source

main.ts:39484

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`IMapsPaidItemSerpElementItem`](../interfaces/IMapsPaidItemSerpElementItem.md).[`title`](../interfaces/IMapsPaidItemSerpElementItem.md#title)

#### Source

main.ts:39476

***

### url?

> **`optional`** **url**: `string`

relevant URL in SERP

#### Implementation of

[`IMapsPaidItemSerpElementItem`](../interfaces/IMapsPaidItemSerpElementItem.md).[`url`](../interfaces/IMapsPaidItemSerpElementItem.md#url)

#### Source

main.ts:39478

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:39493

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:39523

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MapsPaidItemSerpElementItem`](MapsPaidItemSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`MapsPaidItemSerpElementItem`](MapsPaidItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:39516
