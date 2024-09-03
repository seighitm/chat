import { useQuery } from "@tanstack/react-query";
import { getMessages } from "@/apis/apiMessages.ts";
import { LoaderIcon } from "@/assets/icons/Icons";
import { UserImg } from "@/assets/images/images";
import { formatTimestamp } from "@/utils";
import { ScrollArea } from "@/components/UI";
import { QueryKeys } from "@/types/shared/reactQuery.ts";

const Messages = () => {
  const { data: dataMessages, isLoading: isLoadingMessages } = useQuery({
    queryKey: [QueryKeys.ALL_MESSAGES],
    queryFn: getMessages,
  });

  if (isLoadingMessages || !dataMessages) {
    return (
      <div className="flex items-center justify-center">
        <LoaderIcon className="mr-2 h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <ScrollArea className="h-[calc(100vh-80px-2.5rem)] w-full">
      <ul className="flex flex-col gap-2 px-4">
        {dataMessages.data?.map((message) => (
          <li key={message.id} className="flex items-start gap-2">
            <img
              className={"h-8 w-8 rounded-full border-2 border-border p-px"}
              src={UserImg}
              alt="user image"
            />
            <div>
              <div className="h-min rounded-xl border-2 border-border bg-gray-200 p-px px-2">
                {message.content}
              </div>
              <time className="text-sm text-muted-foreground">
                {formatTimestamp(message.createdAt)}
              </time>
            </div>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
};

export default Messages;
