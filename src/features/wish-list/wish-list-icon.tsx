import { isEmpty } from 'lodash';
import { useState } from 'react';
import { LuHeartOff } from 'react-icons/lu';
import { v4 } from 'uuid';

import { HeartIcon } from '@src/components/svg/heart';
import { HeartFilledIcon } from '@src/components/svg/heart-filled';
import { useSiteContext } from '@src/context/site-context';
import { Product } from '@src/models/product';
import { Settings } from '@src/models/settings';
import { ProductCards } from '@src/models/settings/shop';
import { useAddProductToWishListMutation } from '@src/lib/hooks';
import { cn } from '@src/lib/helpers/helper';

export type WishListActions = 'open' | 'add' | 'remove';

type Props = {
  action: WishListActions;
  showIcon: boolean;
  isSingleProduct?: boolean;
  buttonFillColor?: string;
} & (OpenProps | AddProps | RemoveProps) &
  ProductCards;

type OpenProps = {
  action: 'open';
  fillColor?: string | '';
  showText: boolean;
  label?: string;
};

type AddProps = {
  action: 'add';
  product: Product;
  classNames?: string;
};

type RemoveProps = {
  action: 'remove';
  classNames?: string;
  productId: number;
};

export const WishListIcon: React.FC<Props> = (props) => {
  const { settings } = useSiteContext();
  const { shop } = settings as Settings;

  const {
    wishListState: [, setWishListIsOpen],
  } = useSiteContext();

  const [isWishlistHovering, setIsWishlistHovering] = useState(false);

  const {
    buttonBgColor = '#ffffff',
    buttonIconColor = '#ffffff',
    buttonHoverBackgroundColor = '#ffffff',
    buttonHoverIconColor = '#000000',
    buttonStrokeColor = '#000000',
    buttonFillColor = '#ffffff',
    isSingleProduct = false,
  } = props;

  const isBgTransparent = shop?.layout?.productCards?.buttonTransparent && !isSingleProduct;
  const iconBgColor = isBgTransparent ? 'transparent' : buttonBgColor;
  const iconHoverBgColor = isBgTransparent ? 'transparent' : buttonHoverBackgroundColor;
  const iconBorderColor = isBgTransparent ? 'transparent' : '#EBEBEB';
  const iconHoverBorderColor = isBgTransparent ? 'transparent' : buttonHoverBackgroundColor;

  const wishlistButtonStyle = {
    backgroundColor: isWishlistHovering ? (iconHoverBgColor as string) : (iconBgColor as string),
    borderColor: isWishlistHovering ? iconHoverBorderColor : iconBorderColor,
  };

  const iconColor = isWishlistHovering ? buttonHoverIconColor : buttonStrokeColor;
  const iconFillColor = props.buttonFillColor;

  const handleWishListOpen = () => {
    setWishListIsOpen((prev: boolean) => !prev);
  };

  if (props.action == 'open') {
    return (
      <div className="flex items-center gap-2 h-full">
        <button
          className=""
          onClick={handleWishListOpen}
        >
          {props.showIcon &&
            (isWishlistHovering ? (
              <HeartFilledIcon
                strokeColor={iconColor}
                fillColor={iconFillColor}
              />
            ) : (
              <HeartFilledIcon
                strokeColor={iconColor}
                fillColor={iconFillColor}
              />
            ))}
          <span className="hidden lg:inline-block">{props.showText && props.label}</span>
        </button>
      </div>
    );
  }

  if (props.action == 'add') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [addProductToWishList] = useAddProductToWishListMutation(props.product);
    return (
      <p
        className={cn(props.classNames, {
          'bg-brand-wishlist-background': !isSingleProduct,
          'hover:bg-brand-wishlist-hover-background': !isSingleProduct,
        })}
        onClick={() => {
          addProductToWishList({
            variables: {
              productId: parseInt(props.product?.id as string),
              clientMutationId: v4(),
            },
          });
        }}
        onMouseOver={() => setIsWishlistHovering(true)}
        onMouseLeave={() => setIsWishlistHovering(false)}
        style={!isEmpty(wishlistButtonStyle) && isSingleProduct ? wishlistButtonStyle : {}}
      >
        {isWishlistHovering ? (
          <HeartFilledIcon
            strokeColor={isSingleProduct ? iconColor : ''}
            fillColor={
              isSingleProduct ? (isWishlistHovering ? buttonHoverIconColor : buttonIconColor) : ''
            }
            className={cn({ 'fill-brand-wishlist-hover-icon-fill': !isSingleProduct })}
          />
        ) : (
          <HeartFilledIcon
            strokeColor={isSingleProduct ? iconColor : ''}
            className={cn('border-white fill-blue-50 group-hover/wishlist:fill-white', {
              'fill-brand-wishlist-icon-fill': !isSingleProduct,
            })}
          />
        )}
      </p>
    );
  }

  if (props.action == 'remove') {
    return (
      <p
        className={props.classNames}
        onMouseOver={() => setIsWishlistHovering(true)}
        onMouseLeave={() => setIsWishlistHovering(false)}
        style={!isEmpty(wishlistButtonStyle) ? wishlistButtonStyle : {}}
      >
        <LuHeartOff className="w-8 h-8 md:w-10 md:h-10" />
      </p>
    );
  }

  return <HeartIcon />;
};