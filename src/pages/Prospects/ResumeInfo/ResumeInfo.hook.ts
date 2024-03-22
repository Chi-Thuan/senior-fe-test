import { useProspectsContext } from '../Prospects.context'

const useResumeInfo = () => {
    const { prospectInfo } = useProspectsContext()

    return { 
        resume: prospectInfo?.resume
    }
}

export default useResumeInfo