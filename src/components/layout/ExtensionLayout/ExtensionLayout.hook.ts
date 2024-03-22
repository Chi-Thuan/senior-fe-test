import { FaRegUser, FaUser } from "react-icons/fa";
import { IoBookmarkOutline, IoBookmark, IoSearch } from "react-icons/io5";
import {
  PiDotsThreeOutlineLight,
  PiDotsThreeOutlineFill,
} from "react-icons/pi";
import { useEffect, useMemo } from "react";
import { indexedDatabase } from "~/helpers/indexedDB";
import { INDEXED_DB } from "~/constants/common";
import { MOCK_USER } from "~/__mocks__";
import { useDispatch } from "react-redux";
import { updateUser } from "~/store/global/global.actions";
import { UserModel } from "~/models/user.model";
import { useRouter } from "~/hooks";

const useExtensionLayout = () => {
  const { location, navigate } = useRouter();
  const dispatch = useDispatch();

  const listMenu = [
    {
      link: "/",
      name: "Prospect",
      icon: FaRegUser,
      iconActive: FaUser,
    },
    {
      link: "/search",
      name: "Search",
      icon: IoSearch,
    },
    {
      link: "/saved",
      name: "Saved",
      icon: IoBookmarkOutline,
      iconActive: IoBookmark,
    },
    {
      link: "/more",
      name: "More",
      icon: PiDotsThreeOutlineLight,
      iconActive: PiDotsThreeOutlineFill,
    },
  ];

  // Save mock data to indexed DB
  useEffect(() => {
    indexedDatabase(INDEXED_DB.TABLE.USERS)
      .findMany({ id: MOCK_USER.id })
      .then((data: any) => {
        if (!data?.length) {
          indexedDatabase(INDEXED_DB.TABLE.USERS).create({ data: MOCK_USER });
        }

        const _user = (data[0] || MOCK_USER) as UserModel;
        dispatch(updateUser(_user));
      });
  }, []);

  const goBack = () => navigate(-1);

  const isShowBackButton = useMemo(() => {
    const paths = location.pathname.split("/").filter((e) => e);
    return paths.length >= 2;
  }, [location.pathname]);

  return {
    listMenu,
    isShowBackButton,
    goBack,
  };
};

export default useExtensionLayout;
