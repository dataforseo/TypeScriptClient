**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ShopsListMerchantSerpElementItem

# Class: ShopsListMerchantSerpElementItem

## Extends

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

## Implements

- [`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ShopsListMerchantSerpElementItem(data)

> **new ShopsListMerchantSerpElementItem**(`data`?): [`ShopsListMerchantSerpElementItem`](ShopsListMerchantSerpElementItem.md)

#### Parameters

• **data?**: [`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md)

#### Returns

[`ShopsListMerchantSerpElementItem`](ShopsListMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructors)

#### Source

main.ts:172939

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

#### Source

main.ts:20486

***

### base\_price?

> **`optional`** **base\_price**: `number`

product price without tax and shipping

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`base_price`](../interfaces/IShopsListMerchantSerpElementItem.md#base_price)

#### Source

main.ts:172908

***

### currency?

> **`optional`** **currency**: `string`

currency in the ISO format
example:
USD

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`currency`](../interfaces/IShopsListMerchantSerpElementItem.md#currency)

#### Source

main.ts:172919

***

### details?

> **`optional`** **details**: `string`

details and special offers
if there are no details, the value will be null

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`details`](../interfaces/IShopsListMerchantSerpElementItem.md#details)

#### Source

main.ts:172906

***

### domain?

> **`optional`** **domain**: `string`

domain in SERP

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`domain`](../interfaces/IShopsListMerchantSerpElementItem.md#domain)

#### Source

main.ts:172898

***

### position?

> **`optional`** **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`position`](../interfaces/IShopsListMerchantSerpElementItem.md#position)

#### Source

main.ts:172894

***

### product\_annotation?

> **`optional`** **product\_annotation**: `string`

data from annotations and badges with special offers
if there is no annotation for this product, the value will be null
examples: LOW PRICE, SPECIAL OFFER, SALE, PRICE DROP

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`product_annotation`](../interfaces/IShopsListMerchantSerpElementItem.md#product_annotation)

#### Source

main.ts:172935

***

### product\_condition?

> **`optional`** **product\_condition**: `string`

indicated condition of the product
possible values: Used, Refurbished, New, null

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`product_condition`](../interfaces/IShopsListMerchantSerpElementItem.md#product_condition)

#### Source

main.ts:172931

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IShopsListMerchantSerpElementItem.md#rank_absolute)

#### Source

main.ts:172890

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`rank_group`](../interfaces/IShopsListMerchantSerpElementItem.md#rank_group)

#### Source

main.ts:172887

***

### rating?

> **`optional`** **rating**: [`RatingElement`](RatingElement.md)

shop rating
the shop popularity rate based on product reviews

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`rating`](../interfaces/IShopsListMerchantSerpElementItem.md#rating)

#### Source

main.ts:172925

***

### seller\_name?

> **`optional`** **seller\_name**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`seller_name`](../interfaces/IShopsListMerchantSerpElementItem.md#seller_name)

#### Source

main.ts:172922

***

### shipping\_price?

> **`optional`** **shipping\_price**: `number`

product shipping price

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`shipping_price`](../interfaces/IShopsListMerchantSerpElementItem.md#shipping_price)

#### Source

main.ts:172913

***

### shop\_ad\_aclk?

> **`optional`** **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`shop_ad_aclk`](../interfaces/IShopsListMerchantSerpElementItem.md#shop_ad_aclk)

#### Source

main.ts:172928

***

### tax?

> **`optional`** **tax**: `number`

the amount of tax
tax is specified as the actual amount of money, not as the percentage

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`tax`](../interfaces/IShopsListMerchantSerpElementItem.md#tax)

#### Source

main.ts:172911

***

### title?

> **`optional`** **title**: `string`

product title

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`title`](../interfaces/IShopsListMerchantSerpElementItem.md#title)

#### Source

main.ts:172900

***

### total\_price?

> **`optional`** **total\_price**: `number`

product price including tax and shipping

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`total_price`](../interfaces/IShopsListMerchantSerpElementItem.md#total_price)

#### Source

main.ts:172915

***

### url?

> **`optional`** **url**: `string`

Google Shopping URL forwarding to the product page on the seller’s website
if you want to obtain a URL of the advertisement forwarding to the product page on the seller’s website, please refer to the Google Shopping Sellers Ad URL endpoint

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`url`](../interfaces/IShopsListMerchantSerpElementItem.md#url)

#### Source

main.ts:172903

***

### xpath?

> **`optional`** **xpath**: `string`

XPath of the element

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`xpath`](../interfaces/IShopsListMerchantSerpElementItem.md#xpath)

#### Source

main.ts:172896

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`init`](BaseMerchantSerpElementItem.md#init)

#### Source

main.ts:172944

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`toJSON`](BaseMerchantSerpElementItem.md#tojson)

#### Source

main.ts:172979

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ShopsListMerchantSerpElementItem`](ShopsListMerchantSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ShopsListMerchantSerpElementItem`](ShopsListMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)

#### Source

main.ts:172972
