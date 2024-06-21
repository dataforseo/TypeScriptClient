**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / LocalPackDataforseoLabsSerpElementItem

# Class: LocalPackDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new LocalPackDataforseoLabsSerpElementItem(data)

> **new LocalPackDataforseoLabsSerpElementItem**(`data`?): [`LocalPackDataforseoLabsSerpElementItem`](LocalPackDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md)

#### Returns

[`LocalPackDataforseoLabsSerpElementItem`](LocalPackDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:97701

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20243

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`description`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#description)

#### Source

main.ts:97663

***

### domain?

> **`optional`** **domain**: `string`

domain where a link points

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`domain`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#domain)

#### Source

main.ts:97665

***

### estimated\_paid\_traffic\_cost?

> **`optional`** **estimated\_paid\_traffic\_cost**: `number`

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads for the returned keyword
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`estimated_paid_traffic_cost`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)

#### Source

main.ts:97693

***

### etv?

> **`optional`** **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`etv`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#etv)

#### Source

main.ts:97683

***

### impressions\_etv?

> **`optional`** **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`impressions_etv`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#impressions_etv)

#### Source

main.ts:97688

***

### is\_paid?

> **`optional`** **is\_paid**: `boolean`

indicates whether the element is an ad

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`is_paid`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#is_paid)

#### Source

main.ts:97671

***

### main\_domain?

> **`optional`** **main\_domain**: `string`

primary domain name in SERP

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`main_domain`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#main_domain)

#### Source

main.ts:97676

***

### phone?

> **`optional`** **phone**: `string`

phone number

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`phone`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#phone)

#### Source

main.ts:97667

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`position`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:97657

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:97653

***

### rank\_changes?

> **`optional`** **rank\_changes**: [`RankChanges`](RankChanges.md)

changes in rankings
ranking changes of the SERP element compared to the preceding month;
Note: the changes are calculated even if the preceding month is not included in a POST request

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`rank_changes`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#rank_changes)

#### Source

main.ts:97697

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:97650

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`rating`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#rating)

#### Source

main.ts:97674

***

### relative\_url?

> **`optional`** **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`relative_url`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#relative_url)

#### Source

main.ts:97678

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`title`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:97661

***

### url?

> **`optional`** **url**: `string`

URL link

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`url`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#url)

#### Source

main.ts:97669

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:97659

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Source

main.ts:97706

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Source

main.ts:97740

***

### fromJS()

> **`static`** **fromJS**(`data`): [`LocalPackDataforseoLabsSerpElementItem`](LocalPackDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`LocalPackDataforseoLabsSerpElementItem`](LocalPackDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:97733
