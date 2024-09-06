[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AmazonDeliveryInfo

# Class: AmazonDeliveryInfo

## Implements

- [`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AmazonDeliveryInfo()

> **new AmazonDeliveryInfo**(`data`?): [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

#### Parameters

• **data?**: [`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md)

#### Returns

[`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

#### Defined in

main.ts:22731

## Properties

### delivery\_date\_from?

> `optional` **delivery\_date\_from**: `string`

the earliest date when the product can be shipped

#### Implementation of

[`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md).[`delivery_date_from`](../interfaces/IAmazonDeliveryInfo.md#delivery_date_from)

#### Defined in

main.ts:22717

***

### delivery\_date\_to?

> `optional` **delivery\_date\_to**: `string`

the latest date when the product can be delivered

#### Implementation of

[`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md).[`delivery_date_to`](../interfaces/IAmazonDeliveryInfo.md#delivery_date_to)

#### Defined in

main.ts:22719

***

### delivery\_message?

> `optional` **delivery\_message**: `string`

message accompanying the delivery information as posted by the seller

#### Implementation of

[`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md).[`delivery_message`](../interfaces/IAmazonDeliveryInfo.md#delivery_message)

#### Defined in

main.ts:22715

***

### delivery\_price?

> `optional` **delivery\_price**: [`PriceInfo`](PriceInfo.md)

price for the delivery
price of the delivery based on the location you specified in the POST request;
if free delivery is available, the value is null

#### Implementation of

[`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md).[`delivery_price`](../interfaces/IAmazonDeliveryInfo.md#delivery_price)

#### Defined in

main.ts:22727

***

### fastest\_delivery\_date\_from?

> `optional` **fastest\_delivery\_date\_from**: `string`

the earliest date when the product can be delivered with a fast delivery option

#### Implementation of

[`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md).[`fastest_delivery_date_from`](../interfaces/IAmazonDeliveryInfo.md#fastest_delivery_date_from)

#### Defined in

main.ts:22721

***

### fastest\_delivery\_date\_to?

> `optional` **fastest\_delivery\_date\_to**: `string`

the latest date when the product can be delivered with a fast delivery option

#### Implementation of

[`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md).[`fastest_delivery_date_to`](../interfaces/IAmazonDeliveryInfo.md#fastest_delivery_date_to)

#### Defined in

main.ts:22723

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:22740

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:22762

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

#### Defined in

main.ts:22755
